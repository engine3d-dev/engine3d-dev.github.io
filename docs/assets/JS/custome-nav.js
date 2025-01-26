document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded. Starting script.');

    const customNavigation = document.querySelector('.custom-navigation');
    const contentContainer = document.querySelector('.api_engine3d_loader'); // Target container for dynamic content

    if (!customNavigation) {
        console.error('Missing element: .custom-navigation');
        return;
    }

    if (!contentContainer) {
        console.error('Missing element: .api_engine3d_loader');
        return;
    }

    console.log('Both .custom-navigation and .api_engine3d_loader elements are present.');

    // Base path to Sphinx output
    const globalBasePath = `${window.location.origin}/Documentation/API_Release/`;

    const fetchAndBuildHierarchy = (url, callback) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${url} (Status: ${response.status})`);
                }
                return response.text();
            })
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');

                // Locate the `.toctree-wrapper`
                const navTree = doc.querySelector('.toctree-wrapper');
                if (!navTree) {
                    console.log(`No .toctree-wrapper found at ${url}`);
                    callback([]);
                    return;
                }

                // Parse the navigation tree
                const items = [];
                navTree.querySelectorAll(':scope > ul > li').forEach(item => {
                    const link = item.querySelector('a');
                    const subTree = item.querySelector('ul');
                    const href = link ? link.getAttribute('href') : null;

                    if (href) {
                        const absoluteHref = new URL(href, url).href; // Resolve the global URL
                        const isLeaf = href.endsWith('.h.html') || href.endsWith('.hpp.html');
                        items.push({
                            name: link.textContent.trim(),
                            href: absoluteHref,
                            isLeaf: isLeaf,
                            subTree: subTree ? absoluteHref : null,
                        });
                    }
                });

                callback(items);
            })
            .catch(err => {
                console.error(`Error fetching ${url}:`, err);
                callback([]);
            });
    };

    const buildHierarchy = (url, parentElement) => {
        fetchAndBuildHierarchy(url, (items) => {
            const list = document.createElement('ul');

            items.forEach(({ name, href, isLeaf, subTree }) => {
                const listItem = document.createElement('li');
                listItem.style.display = 'block'; // Ensure clickable area
                listItem.style.margin = '5px 0'; // Add spacing between items

                if (isLeaf) {
                    // Add links for leaf nodes
                    const anchor = document.createElement('a');
                    anchor.textContent = name;
                    anchor.href = href;
                    anchor.style.cursor = 'pointer';
                    anchor.style.display = 'block'; // Make entire row clickable
                    anchor.style.padding = '5px'; // Add padding for better click area

                    anchor.addEventListener('click', (event) => {
                        event.preventDefault();
                        console.log(`Fetching content from: ${href}`);

                        fetch(href)
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error(`Failed to fetch page content. Status: ${response.status}`);
                                }
                                return response.text();
                            })
                            .then(pageHtml => {
                                const parser = new DOMParser();
                                const pageDoc = parser.parseFromString(pageHtml, 'text/html');

                                const possibleSelectors = ['#content', '.body', '.document'];
                                let pageContent = null;
                                for (const selector of possibleSelectors) {
                                    pageContent = pageDoc.querySelector(selector);
                                    if (pageContent) break;
                                }

                                if (!pageContent) {
                                    console.error(`Failed to locate content in the fetched page for: ${href}`);
                                    contentContainer.innerHTML = '<p>Error: Unable to locate content.</p>';
                                    return;
                                }

                                //Restarting Content
                                contentContainer.innerHTML = ''; 
                                contentContainer.appendChild(pageContent);

                                const apiLoadedEvent = new CustomEvent('api_loaded', {
                                    detail: {
                                        url: href,
                                        timestamp: new Date(),
                                    },
                                });
                                document.dispatchEvent(apiLoadedEvent);
                                console.log(`'api_loaded' event dispatched for ${href}`);
                            })
                            .catch(err => console.error(`Error loading page content for ${href}:`, err));
                    });

                    listItem.appendChild(anchor);
                } else {
                    // Create a toggleable folder
                    const folderContainer = document.createElement('div');
                    folderContainer.style.cursor = 'pointer';
                    folderContainer.style.display = 'flex';
                    folderContainer.style.alignItems = 'center';
                    folderContainer.style.padding = '5px';

                    const toggle = document.createElement('span');
                    toggle.textContent = '+';
                    toggle.style.marginRight = '5px';

                    const folderName = document.createElement('span');
                    folderName.textContent = name;

                    folderContainer.appendChild(toggle);
                    folderContainer.appendChild(folderName);
                    listItem.appendChild(folderContainer);

                    const childList = document.createElement('ul');
                    childList.style.display = 'none';
                    listItem.appendChild(childList);

                    // Add toggle functionality
                    folderContainer.addEventListener('click', () => {
                        const isVisible = childList.style.display === 'block';
                        childList.style.display = isVisible ? 'none' : 'block';
                        toggle.textContent = isVisible ? '+' : '-';
                    });

                    // Recursively build the subtree
                    buildHierarchy(subTree, childList);
                }

                list.appendChild(listItem);
            });

            parentElement.appendChild(list);
        });
    };

    // Start building the hierarchy from the global base path
    buildHierarchy(`${globalBasePath}index.html`, customNavigation);
});


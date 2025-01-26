/**
 * Custom Side bar
 */
window.addEventListener('resize', () => {
    const width = window.innerWidth;

    // Creating a dynamic width for the sidebar that shrinks faster than vw or %
    let sidebarWidthPercentage;
    let sidebarWidth;
    sidebarWidthPercentage = Math.max(12, 15 - ((1920 - width) / 50));
    if (width >= 1780)
        sidebarWidth = Math.max(200, width * (sidebarWidthPercentage / 100));
    else
        sidebarWidth = Math.max(250, width * (sidebarWidthPercentage / 100));
    let extraSidebar = document.querySelector('.custome-sidebar__extra');

    // Building the custom side bar
    if (!extraSidebar) {

        extraSidebar = document.createElement('div');
        extraSidebar.className = 'custome-sidebar custome-sidebar__extra';
        document.body.appendChild(extraSidebar);

        // Building sidebar header
        extraSidebar.innerHTML = `
             <header class="custome-sidebar__header">
                <div class="custome-sidebar__title">
                <span> <i>Engine3D&emsp;</i> </span>
                </div>
                <div class="custome-sidebar__subtitle">
                <span> &emsp;<i>API</i>&emsp;</span>
                </div>
            </header>
            <div class="custome-sidebar__nav">
            <p>-----------------------------------</p>
            <div class="custom-navigation"></div>
                <div id="content">
                </div>
            </div>
            <div class="clickable-box">
            </div>`;
        extraSidebar.classList.add('show'); // Show tells the api to start visible
    }

    // Setting the custom width
    extraSidebar.style.width = `${sidebarWidth}px`;

    // Determines what side of the page to animate on
    // Small bug when show is off and resizing passed 1780, then showing
    if (window.location.pathname.includes('/Documentation/engine3d_api_docs/')) {
        if (extraSidebar.classList.contains('show')) {
            if (width >= 1780) {
                extraSidebar.style.right = 'auto';
                extraSidebar.style.left = '0';
                void extraSidebar.offsetWidth;
                extraSidebar.classList.add('show-left');
            } else if (width < 1780) {
                extraSidebar.style.left = 'auto';
                extraSidebar.style.right = '0';
                void extraSidebar.offsetWidth;
                extraSidebar.classList.add('show-right');
            }
        }
        else {
            if (width >= 1780) {
                extraSidebar.style.transform = `translateX(${-100}%)`;
                extraSidebar.style.right = 'auto';
                extraSidebar.style.left = '0';
                void extraSidebar.offsetWidth;
                extraSidebar.classList.remove('show-left');
            } else if (width < 1780) {
                extraSidebar.style.transform = `translateX(${100}%)`;
                extraSidebar.style.left = 'auto';
                extraSidebar.style.right = '0';
                void extraSidebar.offsetWidth;
                extraSidebar.classList.remove('show-right');
            }
        }
    }
});

/**
 * Custom Sidebar Button
 */
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.md-header__inner');
    const api_path = '/Documentation/engine3d_api_docs/';

    if (header && window.location.pathname.includes(api_path)) {

        // This create the "API" button on engine page
        const button = document.createElement('button');
        button.id = 'custom-sidebar-toggle';
        button.className = 'md-header__button';
        button.textContent = 'API';
        button.style.fontSize = '20px'
        header.insertBefore(button, header.children[3]);

        button.addEventListener('click', () => {
            toggleCustomSidebar(
                api_path,
                button
            )
        });
    }
    else {
        // Custom side bar show only exsist in "Engine3D_API sub_folder"
        const customSidebar = document.querySelector('.custome-sidebar__extra');
        if (customSidebar) {
            customSidebar.remove();
        }
        return;
    }

    const sidebar = document.querySelector('.custome-sidebar__extra');
    const apiPath = '/Documentation/engine3d_api_docs/';
    if (sidebar) {

        // This button is the "-" on the sidebar
        const sidebarButton = document.createElement('button');
        sidebarButton.id = 'custom-sidebar-inner-toggle';
        sidebarButton.className = 'custome-sidebar__button';
        sidebarButton.style.position = 'absolute';
        sidebarButton.textContent = '-';
        sidebarButton.style.fontSize = '35px';
        sidebarButton.style.width = '12px';
        sidebarButton.style.backgroundColor = 'rgba(0,0,0,0)';
        sidebarButton.style.transform = "TranslateY(-10px)";
        sidebarButton.style.pointerEvents = "visible";

        // To match the remove page button with current version (left apple, everything else right)
        const userAgent = window.navigator.userAgent;
        const platform = window.navigator.userAgentData.platform || "NA";
        let button_loc = '5%';
        if (platform != "NA" && (platform.includes('macOS') || /iPhone|iPad|iPod/i.test(userAgent))) {
            button_loc = '90%';
        }

        sidebarButton.addEventListener('mouseenter', () => {
            sidebarButton.style.color = '#ff4d4d'; 
            sidebarButton.style.fontSize = '40px';
            sidebarButton.style.transition = 'background-color 0.3s ease, font-size 0.3s ease'; 
        });

        sidebarButton.addEventListener('mouseleave', () => {
            sidebarButton.style.color = '#ffffff';
            sidebarButton.style.fontSize = '35px'; 
        });

        sidebarButton.style.right = button_loc;
        sidebarButton.style.zIndex = '1003'; // Passed the sidebar header by 1

        sidebar.insertBefore(sidebarButton, sidebar.children[0]);

        sidebarButton.addEventListener('click', () => {
            toggleCustomSidebar(
                apiPath,
                sidebarButton
            )
        });
    }
});

// Button body for toggling on and off the side bar
function toggleCustomSidebar(apiPath, button) {
    const header = document.querySelector('.md-header__inner');
    const sidebarSelector = '.custome-sidebar__extra';
    const navSelector = '.custome-sidebar__nav';
    const headerNavSelector = '.custome-sidebar__header'
    if (header && window.location.pathname.includes(apiPath)) {

            const width = window.innerWidth;

            if (window.location.pathname.includes(apiPath)) {
                const extraSidebar = document.querySelector(sidebarSelector);
                const extraNav = document.querySelector(navSelector);
                const extraNav2 = document.querySelector(headerNavSelector);

                if (!extraSidebar || !extraNav || !extraNav2) {
                    console.error('Some sidebar elements are not found.');
                    return;
                }

                if (width >= 1780 && !extraSidebar.classList.contains('show-left') && !extraSidebar.classList.contains('show')) {
                    // Right Side
                    extraSidebar.classList.remove('show-right');
                    extraSidebar.style.transform = `translateX(0%)`;
                    void extraSidebar.offsetWidth;
                    extraSidebar.style.opacity = '1';
                    extraNav.style.pointerEvents = 'visible';
                    extraNav2.style.pointerEvents = 'visible';
                    extraSidebar.classList.add('show-left', 'show');
                } else if (width < 1780 && !extraSidebar.classList.contains('show-right') && !extraSidebar.classList.contains('show')) {
                    // Left Side
                    extraSidebar.classList.remove('show-left');
                    extraSidebar.style.transform = `translateX(0%)`;
                    void extraSidebar.offsetWidth;
                    extraSidebar.style.opacity = '1';
                    extraNav.style.pointerEvents = 'visible';
                    extraNav2.style.pointerEvents = 'visible';
                    extraSidebar.classList.add('show-right', 'show');
                } else {
                    //Turn off
                    extraSidebar.style.opacity = '0';
                    extraNav.style.pointerEvents = 'none';
                    extraNav2.style.pointerEvents = 'none';

                    if (!extraSidebar.classList.contains('show-left')) {
                        extraSidebar.style.transform = `translateX(100%)`;
                        extraSidebar.style.right = '0';
                        extraSidebar.style.left = 'auto';
                    } else if (!extraSidebar.classList.contains('show-right')) {
                        extraSidebar.style.transform = `translateX(-100%)`;
                        extraSidebar.style.left = '0';
                        extraSidebar.style.right = 'auto';
                    }

                    void extraSidebar.offsetWidth;
                    extraSidebar.classList.remove('show-left', 'show-right', 'show');
                }
            }
    }
}

window.dispatchEvent(new Event('resize'));
document.addEventListener('api_loaded', (event) => {
    console.log('Processing started...');

    // Select the container with `itemprop="articleBody"`
    const articleBody = document.querySelector('[itemprop="articleBody"]');
    if (!articleBody) {
        console.error('No container found with itemprop="articleBody".');
        return;
    }

    // **Batch DOM Operations**: Use querySelectorAll once for all relevant elements
    const paragraphs = articleBody.querySelectorAll('p');
    const cppElements = articleBody.querySelectorAll('.cpp');
    const emElements = articleBody.querySelectorAll('em');

    // **Process Paragraphs**
    paragraphs.forEach((paragraph) => {
        if (!paragraph.textContent.trim()) return; // Skip empty
        if (paragraph.classList.length > 0) return; // Skip with class
        if (paragraph.closest('.field-odd, .field-even')) return; // Skip in field-odd/field-even
        const parent = paragraph.parentElement;
        const grandparent = parent?.parentElement;
        if (grandparent?.matches('dl.simple')) return; // Skip grandchild of dl.simple

        // New Condition: Check if parent is <dd> and its first child contains "BUG"
        if (parent?.matches('dd')) {
            const firstChild = grandparent.firstElementChild;
            const grandchild = firstChild.firstElementChild;
            const firstChildText = grandchild?.textContent || '';
            if (/bug/i.test(firstChildText)) { // Case-insensitive check for "bug"
                // Remove the <dt> element (first child of <dd>)

                firstChild.remove();
                

                // Transform <dd> into a <dt>
                const newDt = document.createElement('dt');
                newDt.classList.add('admonition', 'bug');

                const bugTitle = document.createElement('p');
                bugTitle.classList.add('admonition-title');
                bugTitle.textContent = 'Bug';
                newDt.appendChild(bugTitle);
                newDt.appendChild(paragraph.cloneNode(true));

                parent.replaceWith(newDt); // Replace <dd> with the new <dt>
                return; // Skip further processing for this paragraph
            }
        }

        if (parent?.matches('div'))
        {
            const firstChild = parent.firstElementChild;
            const parentText = firstChild?.textContent;
            if(/warning/i.test(parentText))
            {
                return;
            }
            else if(/remark/i.test(parentText))
            {
                return;
            }
        }

        // Default: Turn into a "Note"
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('admonition', 'note');

        const noteTitle = document.createElement('p');
        noteTitle.classList.add('admonition-title');
        noteTitle.textContent = 'Explanation';
        noteDiv.appendChild(noteTitle);
        noteDiv.appendChild(paragraph.cloneNode(true));
        paragraph.replaceWith(noteDiv);
    });

    const examples = articleBody.querySelectorAll('.highlight-default');

    examples.forEach((example) => {
        const parent = example.parentElement;
        const firstChild = parent.firstElementChild;

        if(/note/i.test(firstChild?.textContent))
        {
            parent.classList.replace('note', 'example');
            firstChild.textContent = 'EXAMPLE USAGE:';
        }
    });

    // **Process .cpp Elements**
    cppElements.forEach((cpp, index) => {
        if (index < 2) return; // Skip first two
        cpp.classList.add('pre__inside');
    });

    // **Process <em> Elements**
    emElements.forEach((em, index) => {
        em.classList.add('highlighted-em');
        em.style.fontSize = '24px';
        em.style.fontStyle = 'italic';
    });

    console.log('Processing completed.');
});
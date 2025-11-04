#!/bin/bash

# Script to inject custom CSS into all Doxygen HTML files

HTML_DIR="mkdocs/html"
CSS_FILE="css_themes/general.css"

# Find all HTML files and inject the CSS link after doxygen.css
find "$HTML_DIR" -name "*.html" -type f | while read html_file; do
    # Check if the CSS link is already present
    if ! grep -q "$CSS_FILE" "$html_file"; then
        # Insert the custom CSS link after doxygen.css
        if [[ "$OSTYPE" == "darwin"* ]]; then
            # macOS
            sed -i '' '/doxygen.css/a\
<link href="doxygen-custom.css" rel="stylesheet" type="text/css" />
' "$html_file"
        else
            # Linux
            sed -i '/doxygen.css/a <link href="doxygen-custom.css" rel="stylesheet" type="text/css" />' "$html_file"
        fi
        echo "Injected CSS into: $html_file"
    fi
done

echo "Custom CSS injection complete!"


import os
import xml.etree.ElementTree as ET
from collections import defaultdict


def parse_doxygen_xml_folder(xml_folder, output_dir):
    # Build a global hierarchy dictionary
    global_hierarchy = defaultdict(dict)

    # Iterate over all files in the XML folder that match *_8h.xml or *_8hpp.xml
    for xml_file in os.listdir(xml_folder):
        if xml_file.endswith("_8h.xml") or xml_file.endswith("_8hpp.xml"):
            xml_path = os.path.join(xml_folder, xml_file)
            parse_doxygen_xml(xml_path, global_hierarchy)

    # Generate the .rst files after processing all files
    generate_rst(global_hierarchy, output_dir)

    # Generate the root index.rst file
    generate_root_index(global_hierarchy, output_dir)


def parse_doxygen_xml(xml_path, global_hierarchy):
    # Parse the Doxygen XML
    tree = ET.parse(xml_path)
    root = tree.getroot()

    # Look specifically for the node with id="1"
    node = root.find(".//node[@id='1']")
    if node is None:
        print(f"No node with id=1 found in {xml_path}")
        return

    # Find the label in the node
    label = node.find("label")
    if label is None or not label.text:
        print(f"No <label> found in node with id=1 in {xml_path}")
        return

    # Build the hierarchy for the current label
    path = label.text
    parts = path.split("/")
    current = global_hierarchy
    for part in parts[:-1]:  # Add all parts except the last (the .h or .hpp file)
        current = current.setdefault(part, {})
    # Add the .h or .hpp file as a leaf node
    current[parts[-1]] = None  # Leaf node for .h or .hpp file


def generate_rst(hierarchy, current_path):
    # Recursively write .rst files for the entire hierarchy
    for name, sub_hierarchy in hierarchy.items():
        if name.endswith(".h") or name.endswith(".hpp"):  # Treat .h or .hpp files as leaf nodes
            # Create the directory structure
            file_rst_path = os.path.join(current_path, f"{name}.rst")

            # Create the file .rst
            with open(file_rst_path, "w") as f:
                f.write(f"{name}\n")
                f.write("=" * len(name) + "\n\n")
                f.write(f".. doxygenfile:: {name}\n")  # Keep the full file name with extension
                f.write("   :project: Engine3D\n")

        else:  # Treat as a folder
            # Create the directory structure
            dir_path = os.path.join(current_path, name)
            os.makedirs(dir_path, exist_ok=True)

            # Name the .rst file after the folder
            rst_file_path = os.path.join(dir_path, f"{name}.rst")

            # Create the folder .rst file
            with open(rst_file_path, "w") as f:
                f.write(f"{name.capitalize()}\n")
                f.write("=" * len(name) + "\n\n")
                f.write(".. toctree::\n")
                f.write("   :maxdepth: 2\n\n")
                for sub_name in sub_hierarchy:
                    if sub_name.endswith(".h") or sub_name.endswith(".hpp"):
                        f.write(f"   {sub_name}.rst\n")  # Reference file's .rst
                    else:
                        f.write(f"   {sub_name}/{sub_name}.rst\n")

            # Recurse into subdirectories
            generate_rst(sub_hierarchy, dir_path)


def generate_root_index(hierarchy, output_dir):
    # Create the root index.rst file
    root_index_path = os.path.join(output_dir, "index.rst")
    with open(root_index_path, "w") as f:
        f.write("Root Index\n")
        f.write("==========\n\n")
        f.write(".. toctree::\n")
        f.write("   :maxdepth: 2\n\n")
        for top_level_dir in hierarchy:
            if top_level_dir.endswith(".h") or top_level_dir.endswith(".hpp"):
                f.write(f"   {top_level_dir}.rst\n")  # Reference file's .rst
            else:
                f.write(f"   {top_level_dir}/{top_level_dir}.rst\n")
    print(f"Root index.rst created at {root_index_path}")


# Usage
doxygen_xml_folder = "../../doxygen_output/xml"  # Replace with the folder containing your Doxygen XML files
output_directory = "./"  # Replace with your Sphinx source directory
parse_doxygen_xml_folder(doxygen_xml_folder, output_directory)
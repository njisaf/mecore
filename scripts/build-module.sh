#!/bin/bash

# Clean up previous builds
rm -rf dist/
rm -f module.zip

# Build the project
npm run build

# Create module package
zip -r module.zip module.json dist/ LICENSE README.md

echo "Module package created successfully!"

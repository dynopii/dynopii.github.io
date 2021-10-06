import fs from 'fs';
import path from 'path';

// MARKDOWN_PATH is useful when you want to get the path to a specific file
export const MARKDOWN_PATH = path.join(process.cwd(), 'md_pages');

// markdownFilePaths is the list of all mdx files inside the MARKDOWN_PATH directory
export const markdownFilePaths = fs
  .readdirSync(MARKDOWN_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

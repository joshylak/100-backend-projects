import { glob } from 'glob';
import fs from 'fs-extra';
import doctrine from 'doctrine';

export async function generateDocs(sourcePath = './routes/**/*.js', outputFile = './API_DOCS.md') {
  function parseComments(fileContent) {
    const commentRegex = /\/\*\*([\s\S]*?)\*\//g;
    let match;
    const docs = [];

    while ((match = commentRegex.exec(fileContent)) !== null) {
      const parsed = doctrine.parse(match[1], { unwrap: true });
      const doc = {};
      parsed.tags.forEach(tag => {
        doc[tag.title] = tag.description;
      });
      docs.push(doc);
    }
    return docs;
  }

  function generateMarkdown(docs) {
    let md = '# API Documentation\n\n';
    docs.forEach(doc => {
      md += `## ${doc.route || 'Unknown Route'}\n`;
      md += `**Description:** ${doc.desc || 'No description'}\n\n`;
      md += `**Access:** ${doc.access || 'Unknown'}\n\n`;
    });
    return md;
  }

  const files = await glob(sourcePath);
  let allDocs = [];

  for (let file of files) {
    const content = await fs.readFile(file, 'utf-8');
    const docs = parseComments(content);
    allDocs = allDocs.concat(docs);
  }

  const markdown = generateMarkdown(allDocs);
  await fs.writeFile(outputFile, markdown);
  console.log(`✅ API Docs generated at ${outputFile}`);
  return markdown;
}

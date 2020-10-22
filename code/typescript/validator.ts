import fs from 'fs';
import path from 'path';

const pathToSpec = path.join(__dirname, '../../versions/1/spec.yml');
const spec = fs.readFileSync(pathToSpec, 'utf8')

export async function isValid(input: any): Promise<Boolean> {
  console.log({pathToSpec, length: spec.length, spec})
  return !!input;
}
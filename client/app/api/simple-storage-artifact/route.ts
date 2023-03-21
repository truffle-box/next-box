import path from "path";
import fs from "fs";

export async function GET() {
  const pathToArtifact = path.join(
    process.cwd(),
    "contracts",
    "SimpleStorage.json"
  );
  try {
    return new Response(await fs.promises.readFile(pathToArtifact, "utf8"));
  } catch {
    return new Response(undefined, { status: 404 });
  }
}

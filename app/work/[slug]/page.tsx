import Link from "next/link";
import fs from 'fs';
// import Markdown from 'markdown-to-jsx'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const getWorks = (props:any) => {
//   const folder = "works/"
  const file = `works/${props}.md`;
  const content = fs.readFileSync(file, "utf-8");
  return content;
};

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const content = getWorks(slug);

  return (
    <main className="flex flex-col p-8 mx-auto ">
      <div className="flex flex-row gap-2 mb-8 text-sm">
        <p>
          <Link href={"/"}>ethan</Link>
        </p>
        <p>/</p>
        <p>
          <Link href={"/work"}>work</Link>
        </p>
        <p>/</p>
        <p className="underline">{params.slug}</p>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
      </div>
    </main>
  );
}

export const metadata = {
  title: 'Self-hosting - AT Protocol Docs',
  description:
    'Self-hosting components of the AT Protocol Stack.',
}

export default async function HomePage({ params }: any) {
  try {
    const Content = (await import(`./${params.locale}.mdx`)).default
    return <Content />
  } catch (error) {
    const Content = (await import(`./en.mdx`)).default
    return <Content />
  }
}

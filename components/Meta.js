import Head from "next/head"

export default function Meta( props ) {
  return (
    <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='keywords' content={props.keywords} />
        <meta name="description" content={props.description} />
    </Head>
  )
}

Meta.defaultProps = {
    title: 'Lucas Gontijo',
    keywords: 'lucas gontijo web development frontend developer react next javascript typescript css html sass firebase projects skills',
    description: 'Lucas Gontijo Frontend Developer'
}
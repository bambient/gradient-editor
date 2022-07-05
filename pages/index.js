import Head from 'next/head';
import TextEditor from '../sections/TextEditor';
import Gradient from '../sections/Gradient';

const PageHead = () => {
  return (
    <Head>
    <title>with only a gradient tool</title> 
    <meta name="description" content="Text editor to gradient builder" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  )
}

export default function Home({...props}) { 

  console.log(props);
  return (
  <>
      <PageHead/>
        <Gradient {...props}>
            <TextEditor/>
        </Gradient>
  </>
  )
}

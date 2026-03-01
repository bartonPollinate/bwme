import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Hero from '@components/Hero/Hero'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Barton White - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1+Code:wght@100..700&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <Hero />
        <div class="content">
    <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non rhoncus risus. Vivamus vulputate feugiat egestas. Morbi egestas ex eget lorem lacinia, sit amet consequat est convallis. Sed efficitur finibus porttitor. Fusce id urna molestie, cursus nunc quis, elementum metus. Maecenas et dolor imperdiet, varius sapien nec, porttitor est. Nam venenatis, dui at condimentum viverra, mi ipsum efficitur risus, sit amet mattis massa velit a purus. Integer rutrum consectetur enim quis luctus. Nullam ullamcorper in nulla eu ullamcorper. Pellentesque sed sem at erat convallis facilisis eu a nulla.
</p>
<p>
Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ornare massa iaculis mollis pellentesque. Phasellus in nulla ut orci fermentum scelerisque et non odio. Fusce vitae venenatis dui. Duis id sollicitudin diam, tincidunt sagittis elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam lorem quam, consequat id lacus at, laoreet dignissim metus. Nam luctus porta nisl at lobortis. Aliquam faucibus semper lorem nec interdum. Proin nec bibendum lorem. Praesent neque metus, lobortis nec porttitor quis, sollicitudin at enim. In mauris risus, efficitur eget accumsan sed, luctus quis eros. Proin non tortor pulvinar, volutpat lorem id, vestibulum lorem.
</p>
<p>
Nullam finibus, ipsum sed sollicitudin finibus, purus turpis porttitor nisl, eu facilisis ante ligula a lorem. Vestibulum pharetra et sapien ut iaculis. Curabitur accumsan est metus, vitae vehicula libero aliquam eget. Proin sit amet fermentum est. Maecenas mollis euismod velit a scelerisque. Etiam lobortis, ante in mollis tincidunt, urna eros feugiat dui, nec pulvinar nibh mi in tellus. Integer porta purus tempor, laoreet elit et, malesuada lacus. Sed viverra consequat nibh eu semper. Integer rhoncus odio quis dolor tempus porttitor. Praesent convallis tortor vel luctus condimentum. Sed in libero quis justo ornare gravida eu eget nisl. Phasellus est massa, sodales at volutpat eget, lacinia porttitor eros. Nunc gravida sem urna, a tristique risus tempus nec. In mattis nibh nec dui semper, eget varius dui mattis.
</p>
<p>
Sed sed auctor sapien, luctus dictum sapien. Fusce libero lacus, porttitor id ultricies eu, auctor tincidunt mauris. Suspendisse gravida eu sapien ac vestibulum. Quisque posuere lacus eget justo semper, sit amet blandit felis tincidunt. Aenean a augue et risus blandit dictum at id velit. Nam efficitur quam vitae luctus fermentum. Nunc sollicitudin, elit non elementum porta, lorem massa rhoncus arcu, a dapibus velit nulla eu urna. Quisque faucibus turpis sed magna aliquam, non consequat quam fermentum. Maecenas congue commodo eros, at luctus nisl vulputate ut. Ut feugiat sit amet ipsum et vestibulum. Aliquam magna tortor, pulvinar sit amet interdum id, lobortis quis nisl. Nulla sit amet fermentum libero, ac tempor massa. Sed ipsum tellus, tristique in purus sit amet, bibendum convallis neque. Aliquam dignissim leo eu mi bibendum, maximus sagittis nibh rhoncus. Sed consequat enim ut dictum commodo. Maecenas elementum faucibus risus at egestas.
</p>
<p>
Donec malesuada felis et iaculis maximus. Sed tincidunt mauris nulla, eu sodales sapien gravida in. Duis vitae auctor nisi. Morbi ut lobortis augue, a euismod risus. Nulla volutpat id purus vel egestas. Nullam nec tempus quam. Proin ultrices dapibus commodo. Fusce porttitor a risus quis commodo. Etiam semper, arcu at eleifend condimentum, nunc nibh imperdiet nulla, vel laoreet nunc urna eget enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed mattis, felis gravida viverra sodales, orci purus ullamcorper risus, quis vestibulum nisl magna sed elit. Mauris ut viverra turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec semper felis libero, a mollis urna elementum vel.
</p>
  </div>
      </main>

      <Footer />
    </div>
  )
}

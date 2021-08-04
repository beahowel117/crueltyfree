import { Fragment } from "react";
import { Link } from "next/link";

function ProductsPage(){
  return (
  <Fragment>
    <h1>ProductPage</h1>
    <ul>
      <li>
        <Link href='/products/nextjs'></Link>
      </li>
    </ul>
    </Fragment>
    )
 }
 export default ProductsPage;

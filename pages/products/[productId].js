import {useRouter} from 'next/router';


function ProductDetail(){
 const router = useRouter();

 const productId = router.query.productId;
//send req to backend API
//fetch item with item ID
 return <h1>Product Detail</h1>
}

export default ProductDetail;

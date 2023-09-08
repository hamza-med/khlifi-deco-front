import LinksBar from "@/components/ProductDetail/LinksBar";
import ProductInfo from "@/components/ProductDetail/ProductInfo";
import RelatedProducts from "@/components/ProductDetail/RelatedProducts";
import useFetch from "@/hooks/useFetch";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const { data: product } = useFetch(`/products/${productId}?populate=*`);
  
  return (
    <div>
      <LinksBar
        prodName={product?.attributes?.title}
        catData={product?.attributes?.categories?.data[0]}
        subData={product?.attributes?.sub_categories?.data[0]}
      />
      <ProductInfo prodData={product?.attributes} prodId={product?.id} />
      <RelatedProducts
        prodId={product?.id}
        subCatId={product?.attributes?.sub_categories?.data[0]?.id}
      />
    </div>
  );
};

export default ProductDetail;

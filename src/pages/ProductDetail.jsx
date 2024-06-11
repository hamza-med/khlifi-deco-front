import useFetch from "@/hooks/useFetch";
import SEO from "@/uilib/SEO";
import { Skeleton } from "@chakra-ui/react";
import { Suspense, lazy, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const LinksBar = lazy(() => import("@/components/ProductDetail/LinksBar"));
const ProductInfo = lazy(() =>
  import("@/components/ProductDetail/ProductInfo")
);
const RelatedProducts = lazy(() =>
  import("@/components/ProductDetail/RelatedProducts")
);
const images = ["img", "img2", "img3"];
const imgQuery = images
  .map(
    (img) => `populate[${img}][fields][0]=name&populate[${img}][fields][1]=url&`
  )
  .join("");

const catSubCatQuery =
  "populate[categories][fields][0]=title&populate[sub_categories][fields][0]=title&populate=localizations";

const ProductDetail = () => {
  const { productId } = useParams();
  const [prodId, setProdId] = useState(productId);
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { metaTitle, metaDesc } = t("productDetail");

  const { data: product } = useFetch(
    `/products/${prodId}?populate[localizations][fields][0]=title&${imgQuery}${catSubCatQuery}`
  );
  useEffect(() => {
    setProdId(productId);
  }, [productId]);
  useEffect(() => {
    if (language !== product?.attributes.locale) {
      setProdId(product?.attributes.localizations.data[0].id);
    }
  }, [
    language,
    product?.attributes.locale,
    product?.attributes.localizations.data,
  ]);
  return (
    <div>
      <SEO
        title={metaTitle}
        description={metaDesc}
        url={`/shop/product/${productId} `}
      />

      <Suspense fallback={<Skeleton />}>
        <LinksBar
          prodName={product?.attributes?.title}
          catData={product?.attributes?.categories?.data[0]}
          subData={product?.attributes?.sub_categories?.data[0]}
        />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <ProductInfo prodData={product?.attributes} prodId={product?.id} />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <RelatedProducts
          prodId={product?.id}
          subCatId={product?.attributes?.sub_categories?.data[0]?.id}
        />
      </Suspense>
    </div>
  );
};

export default ProductDetail;

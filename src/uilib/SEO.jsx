import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
let baseUrl = window.location.protocol + "//" + window.location.host;

export default function SEO({
  title,
  description,
  name = "Khelifi Conseils",
  type = "website",
  siteName = "Khelifi Conseils",
}) {
  const location = useLocation();
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${baseUrl}${location.pathname}`} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={`${baseUrl}${location.pathname}`} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
    </Helmet>
  );
}

const metahead = ({
  description = "",
  sitename = "",
  title = "",
  url = "",
  imageUrl = "",
  imageAlt = "",
}) => (
  <>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />

    <meta property="og:title" content={title} />
    <meta property="og:site_name" content={sitename} />
    <meta property="og:url" content={url} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={imageurl} />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageUrl} />
    <meta name="twitter:image:alt" content={imageAlt} />
  </>
);

export default metahead;

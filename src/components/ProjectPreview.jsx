import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function ProjectPreview({
  description,
  previewUrl,
  previewImage,
  previewImageAlt,
  previewImageClassName,
}) {
  return (
    <>
      <Typography variant="body2" gutterBottom>
        {description}
      </Typography>
      <Typography variant="body2" gutterBottom>
        <a href={previewUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={previewImage}
            alt={previewImageAlt}
            width={1600}
            height={900}
            className={
              previewImageClassName ||
              "w-full h-auto rounded-lg object-cover p-4 aspect-video"
            }
          />
        </a>{" "}
      </Typography>
    </>
  );
}

ProjectPreview.propTypes = {
  description: PropTypes.node.isRequired,
  previewUrl: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  previewImageAlt: PropTypes.string.isRequired,
  previewImageClassName: PropTypes.string,
};

import PropTypes from "prop-types";

export default function PortfolioCard({ children }) {
  return (
    <div className="portfolio-card-glow rounded-2xl rounded-tr-none bg-slate-950/60 px-6 py-5 backdrop-blur-sm">
      {children}
    </div>
  );
}

PortfolioCard.propTypes = {
  children: PropTypes.node,
};

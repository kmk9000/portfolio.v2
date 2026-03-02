import PropTypes from "prop-types";

export default function PortfolioCard({ children }) {
  return (
    <div className="rounded-xl border border-white/5 bg-black/20 p-6 shadow-2xl">
      {children}
    </div>
  );
}

PortfolioCard.propTypes = {
  children: PropTypes.node,
};

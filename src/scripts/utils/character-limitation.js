const characterLimitation = ({ text, limit }) => {
  if (text.length > limit) {
    return `${text.substring(0, limit)} ...`;
  }
  return false;
};

export default characterLimitation;

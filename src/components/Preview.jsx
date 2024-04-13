import "../styles/Preview.css";
function Preview({ generalData, educationData, experienceData }) {
  const { firstName, lastName, position, email, phone } = generalData;
  return (
    <>
      <div className="preview-header">
        {(firstName || lastName) && (
          <h1>
            {firstName} {lastName}
          </h1>
        )}
        {position && <h3>{position}</h3>}
        <div className="preview-header-personal">
          {email && (
            <p>
              <i className="fa-solid fa-envelope"></i>
              {email}
            </p>
          )}
          {phone && (
            <p>
              <i className="fa fa-phone" aria-hidden="true"></i>
              {phone}
            </p>
          )}
        </div>
      </div>
      <div className="preview-sidebar"></div>
      <div className="preview-main">
        <div className="preview-education"></div>
        <div className="preview-experience"></div>
        <div className="preview-languages"></div>
        <div className="preview-contact"></div>
      </div>
    </>
  );
}
export default Preview;

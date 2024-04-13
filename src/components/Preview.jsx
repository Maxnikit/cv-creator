import "../styles/Preview.css";
function Preview({ generalData, educationData, experienceData }) {
  const { firstName, lastName, age, email, phone } = generalData;
  return (
    <>
      <div className="preview-header">
        {(firstName || lastName) && (
          <h1>
            {firstName} {lastName}
          </h1>
        )}
        <div className="preview-header-personal">
          {age && <p>Age: {age}</p>}
          {email && (
            <p>
              <i className="fas fa-envelope    "></i>
              <div className="text">{email}</div>
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
      <div className="preview-main">
        <div className="preview-education"></div>
        <div className="preview-experience"></div>
      </div>
    </>
  );
}
export default Preview;

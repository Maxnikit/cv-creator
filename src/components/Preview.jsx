function Preview({ generalData, educationData, experienceData }) {
  const { firstName, lastName, age, email, phone } = generalData;
  return (
    <>
      <h1>
        {generalData.firstName} {generalData.lastName}
      </h1>
      <div></div>
    </>
  );
}
export default Preview;

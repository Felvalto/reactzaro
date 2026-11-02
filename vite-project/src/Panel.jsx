function Panel({ szin }) {
  return (
    <div
      style={{
        backgroundColor: szin.rgb,
        width: "300px",
        height: "200px",
        marginTop: "20px",
      }}
    ></div>
  );
}


export default Panel;
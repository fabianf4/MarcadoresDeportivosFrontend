export function ErrorPage() {
  return (
    <>
      <div
        className="centrar"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div className="error" style={{ fontSize: "50px", fontStyle: "bold", textAlign:'center'}}>
          Error, <br />
          No existe la pagina
        </div>
      </div>
    </>
  )
}

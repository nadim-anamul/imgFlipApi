import useFetch from 'react-fetch-hook';
import Card from './components/Card';
function App() {
  const { isLoading, data, error } = useFetch('https://api.imgflip.com/get_memes');
  const memes = data?.data.memes;
  if (error) {
    return (
      <div>
        <p>Code: ${error.status}</p>
        <p>Message: ${error.statusText}</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="row">
        <h1 className="col-12 my-5">Choose Meme which you want to edit</h1>
        {memes.map((data) => (
          <Card
            key={data.id}
            url={data.url}
            name={data.name}
            boxCount={data.box_count}
            id={data.id}
          ></Card>
        ))}
      </div>
    </>
  );
}

export default App;

import './App.scss';
import GetWeather from './components/GetWeather'

function App() {
  return (
    <main className="app">
      <div className="overlay">
        <div class="p-0 text-center content">
            <div class="pt-5 pb-3 px-3">
              <h1 class="display-5 fw-bold text-white">Is Today a Good Day to go to the Beach?</h1>
              <div class="col-lg-6 mx-auto">
                <p class="lead mb-4 text-white">Have you ever thought... "Hey self, is today a good day to go to the beach?" Well you are in the right place! Use this handy dandy tool and see if today is a good beach day for you! </p>
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <GetWeather></GetWeather>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;


function App() {

  return (
    <div className="flex">
      <div className="w-[60%] h-screen bg-[url(assets/depth.jpg)] bg-center bg-cover shadow-[inset_0px_-150px_300px_#000]" />

      <div className="w-[40%] h-screen bg-gray-700/20 flex justify-center items-center py-12 px-12">
        <div className="w-full h-full flex justify-center items-center flex-col rounded-xl p-4 bg-white">
          <div className="flex flex-col items-center gap-y-5 mb-12">
            <h1 className="font-poppins font-bold text-4xl">Giriş Yap</h1>
            <span className="font-poppins font-medium text-xl">Aşağıdaki bilgilerini girerek giriş yapabilirsin.</span>
          </div>
          <form className="w-full flex flex-col gap-y-5 justify-center items-center mt-3">
            <input type="text" placeholder="Kullanıcı adını gir..." className="p-3 border border-gray-300 rounded-md focus:outline-none w-[70%] px-5" />
            <input type="password" placeholder="Parola gir..." className="p-3 border border-gray-300 rounded-md focus:outline-none w-[70%] px-5" />
          </form>
          <div className="flex justify-between items-center w-[70%] mt-5">
            <div className="w-full flex justify-start items-center gap-x-3">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" className="font-poppins text-md flex justify-center items-center">Beni unutma</label>
            </div>
            <div>
              <a href="#" className="font-poppins text-md text-blue-400 whitespace-nowrap hover:underline">Parolanı mı unuttun?</a>
            </div>
          </div>
          <button className="w-[70%] flex justify-center items-center bg-[#BEBAB2] p-4 rounded-md mt-12 font-poppins text-semibold text-white text-xl">Giriş Yap</button>
        </div>
      </div>
    </div>
  )
}

export default App

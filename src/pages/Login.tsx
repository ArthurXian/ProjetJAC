import logo from "../assets/Logo.png";
import background from "../assets/LoginPhoto.png";
import Button from "../components/Button"; // 复用按钮组件

interface LoginProps {
  onLogin: () => void; // 定义 onLogin 作为 props
}

export default function Login({ onLogin }: LoginProps) {
  return (
    <div className="flex h-screen w-screen items-center justify-between bg-gray-100 overflow-hidden px-10">
      {/* 左侧背景图片 */}
      <div className="w-1/6 max-w-[200px] flex items-center">
        <img src={background} alt="Background" className="w-full h-auto rounded-lg shadow-lg" />
      </div>

      {/* 右侧 Logo + 登录框 */}
      <div className="w-1/3 max-w-[400px] bg-white flex flex-col items-center justify-center p-8 rounded-lg shadow-lg ml-auto">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-32 mb-6" />

        {/* 登录框 */}
        <div className="w-full text-center">
          <h2 className="text-pink-500 text-xl font-bold mb-6">Connexion</h2>

          {/* 输入框 */}
          <input
            type="email"
            placeholder="Adresse mail..."
            className="w-full px-4 py-2 border-b-2 border-pink-400 focus:outline-none focus:border-pink-600 text-lg"
          />

          {/* 使用自定义 Button 组件，并调用 onLogin */}
          <Button handleClick={onLogin} text="SE CONNECTER" />
        </div>
      </div>
    </div>
  );
}

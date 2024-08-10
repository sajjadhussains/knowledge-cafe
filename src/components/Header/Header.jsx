import profile_img from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b-2 max-w-6xl mx-auto mb-6">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile_img} alt="" />
    </div>
  );
};

export default Header;

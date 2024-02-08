export default function SidebarMenu({ text, Icon }) {
  return (
    <div className="flex items-center justify-center lg:items-start lg:justify-start text-xl p-2 hoverEffect text-gray-700">
      <Icon className="w-6 lg:mr-3" />
      <span className="hidden lg:inline">{text}</span>
    </div>
  );
}

export default function SidebarMenu({ text, Icon }) {
  return (
    <div className="flex items-center text-xl p-2 hoverEffect text-gray-500">
      <Icon className="w-8 mr-3" />
      {text}
    </div>
  );
}

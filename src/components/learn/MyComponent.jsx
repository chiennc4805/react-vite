// () => {}
//component = html + css + js, first character must be uppercase 
//JSX : 1 root
//fragment <>
import './style.css';
const MyComponent = () => {
	//const hoidanit = "eric 1"; //string
	//const hoidanit = 25; //number
	//const hoidanit = true; //boolean //khong in ra gi
	//const hoidanit = undefined;
	//const hoidanit = null;
	// const hoidanit = [1,2,3] //array
	const hoidanit = {
		name: "hoidanit",
		age: 25
	}

	//{} cho phép code js trong html, có thể chạy mọi câu lệnh js bên trong
	return (
		<>
			<div> {JSON.stringify(hoidanit)} & hoidanit update</div> //tag
			<div className="child"
				style={ //dấu ngoặc nhọn đầu tiên tượng trưng cho việc sử dụng js trong html
					{ borderRadius: "10px" } //dấu ngoặc nhọn thứ 2 tượng trưng cho object
				}>child</div>
		</>
	);
}

export default MyComponent
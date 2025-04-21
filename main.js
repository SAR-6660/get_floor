function get_floor(){
	return Math.ceil((kv.value - first_kv.value + 1) / kv_count.value)
}

function result(){
	floor.style.display = "";
	out.innerHTML = get_floor();
}

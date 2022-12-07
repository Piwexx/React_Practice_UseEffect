export const getUser = async url => {
	const res = await fetch(url);
	const user = await res.json();

	return user;
};

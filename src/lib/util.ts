export function formatCategoryName(name: string) {
	return name
		.split(/(?=[A-Z])/)
		.map((w) => w[0].toUpperCase() + w.slice(1))
		.join(' ');
}

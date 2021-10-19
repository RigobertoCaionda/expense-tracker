export type Category = {
	[tag: string]: {
		title: string,
		color: string,
		expense: boolean
	}
}//[tag: string] quer dizer que ele vai aceitar qualquer nome que seja uma string, isso acontece quando temos um obj dentro de outro obj
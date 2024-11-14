import books from "../../db";

export async function GET(
	request: Request,
	context: { params: { id: string } },
) {
	const { params } = context;
	const id = params.id;
	const book = books.find((b) => b.id === Number(id));
	// return new Response(JSON.stringify(book), { status: 200 });

	if (book) {
		// return new Response(JSON.stringify(book), { status: 200 });
		return Response.json(book);
	}

	return Response.json({ message: "Not Found" }, { status: 404 });
}

export async function PUT(
	request: Request,
	context: { params: { id: string } },
) {
	const { params } = context;
	const id = params.id;
	const body = await request.json();
	const book = books.find((b) => b.id === Number(id));
	if (book) {
		book.title = body.title;
		book.author = body.author;
		book.year = body.year;
		return Response.json(book);
	}
	return Response.json({ message: "Not Found" }, { status: 404 });
}

export async function DELETE(
	request: Request,
	context: { params: { id: string } },
) {
	const { params } = context;
	const id = params.id;
	const book = books.find((b) => b.id === Number(id));
	if (book) {
		books.splice(books.indexOf(book), 1);
		return Response.json(book);
	}
	return Response.json({ message: "Not Found" }, { status: 404 });
}

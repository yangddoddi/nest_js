export class ResponseEntity<T> {
  constructor(
    public data: T,
    public message: string | null,
    public status: number,
  ) {}
}

# R.I.S.E. with Pamala Burch — Source Code Handoff

This package contains the editable source for the current standalone R.I.S.E. website, including:

- Homepage
- Retirement Readiness Score quiz at `/quiz/`
- Pamala's portrait and all current site images
- Responsive desktop and mobile styling
- Booking, phone, email, and social links

## Build requirements

- Node.js 20.9 or newer
- npm

## Build the static website

1. Run `npm ci`.
2. If GoHighLevel lead capture is required, copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_LEAD_CAPTURE_ENDPOINT` to a GoHighLevel workflow webhook or compatible endpoint.
3. Run `npm run build`.
4. The production-ready static website will be created in the `out` folder.

## GoHighLevel installation

The generated `out` folder is a standard static website. Upload its contents to the web root used for the domain. Preserve the `_next` directory and all image files. The homepage must resolve to `/`, and the quiz must resolve to `/quiz/`.

If the selected GoHighLevel account does not provide direct static-file hosting, use this source package to recreate the pages in GoHighLevel or host the generated `out` folder on a compatible static host and connect the domain through GoHighLevel/DNS.

## Quiz lead integration

The quiz submits this JSON payload to `NEXT_PUBLIC_LEAD_CAPTURE_ENDPOINT`:

```json
{
  "name": "Visitor Name",
  "email": "visitor@example.com",
  "source": "Pamala Retirement Readiness Score",
  "score": 18,
  "result": "Some Gaps",
  "biggestGap": "Market-Loss Protection"
}
```

The endpoint should accept browser-based `POST` requests with `Content-Type: application/json`, allow the final website domain through CORS, create or update the contact in GoHighLevel, and trigger the desired workflow. If no endpoint is configured, the quiz still reveals the score but stores the submission only in that visitor's browser.

## Current public references

- Live domain: `https://risewithpamala.com`
- Booking link: `https://bit.ly/pamala-burch-booking`

# Casual LLM

Casual LLM is a local chatbot built around Hugging Face's
[`HuggingFaceTB/SmolLM2-360M-Instruct`](https://huggingface.co/HuggingFaceTB/SmolLM2-360M-Instruct).
It provides a React-based browser chat UI, a FastAPI backend, and a standalone
terminal chatbot. Model inference runs on the CPU.

## Features

- Streamed chat responses and multiple saved conversations.
- Dark and light themes, starter prompts, assistant personas, and configurable
  generation settings.
- Conversation history, theme, and settings stored in browser `localStorage`.
- FastAPI endpoints for streaming and non-streaming chat, health, and model
  information.
- A standalone terminal chatbot in `chatbot_llm.py`.
- Optional Docker image and Windows launch scripts.

## Requirements

- Python 3.11.
- Internet access on first launch to download the model from Hugging Face.
- Sufficient memory and disk space for PyTorch, Transformers, and the model
  weights. Generation speed depends on your CPU.

## Run the web app

From the project directory, create and activate a virtual environment, then
install the Python dependencies.

### Windows PowerShell

```powershell
py -3.11 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
python run.py
```

### macOS or Linux

```bash
python3.11 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
python run.py
```

Open <http://127.0.0.1:8000>. The model loads in the background when the server
starts, and the first launch downloads its weights. The browser opens
automatically; use `--no-browser` to disable that behavior:

```bash
python run.py --no-browser
```

The launcher also supports `--host`, `--port`, and `--reload`:

```bash
python run.py --host 127.0.0.1 --port 8080 --reload
```

On Windows, `start_web.bat` and `start_web.ps1` start the same launcher. They
use `my_env\Scripts\python.exe` when it exists and otherwise use `python` from
`PATH`; launcher arguments are forwarded to `run.py`.

## Terminal chatbot

With the Python dependencies installed, run:

```bash
python chatbot_llm.py
```

Type `exit` to quit. This program loads the same model directly and uses fixed
generation settings; it does not use the web server.

## Frontend development

The frontend source is in `static/src/` and uses React with Vite. Running the
backend does not require Node.js because the built bundle is included at
`static/dist/bundle.js`.

To run the Vite development server, open a second terminal and run:

```bash
cd static
npm install
npm run dev
```

Open <http://127.0.0.1:5173/dev.html> for the development UI. The Vite server
proxies `/api` requests to the backend at `http://127.0.0.1:8000`, so start the
backend as described above as well. To rebuild the production frontend bundle:

```bash
npm run build
```

## API

Interactive API documentation is available at <http://127.0.0.1:8000/docs>.

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/chat` | Generate a complete response as JSON. |
| `POST` | `/api/chat/stream` | Stream response tokens as Server-Sent Events. |
| `GET` | `/api/health` | Report model loading/readiness and any loading error. |
| `GET` | `/api/model-info` | Report the model name, defaults, and status. |

Both chat endpoints accept a JSON body like:

```json
{
  "messages": [
    {"role": "user", "content": "Tell me a quick joke!"}
  ],
  "system_prompt": "You are a friendly assistant.",
  "temperature": 0.7,
  "top_p": 0.85,
  "max_new_tokens": 256,
  "repetition_penalty": 1.15
}
```

`messages` is required. Each message has a `role` and `content`; user and
assistant messages are used for generation. The remaining fields are optional.
Their defaults and accepted ranges are:

| Field | Default | Accepted range |
| --- | --- | --- |
| `system_prompt` | Friendly, cheerful assistant prompt | Any string or `null` |
| `temperature` | `0.7` | `0` to `2` |
| `top_p` | `0.85` | `0` to `1` |
| `max_new_tokens` | `256` | `1` to `1024` |
| `repetition_penalty` | `1.15` | `1` to `2` |

The web UI exposes narrower ranges for generation controls. While the model is
loading, chat requests return `503`; if model loading fails, they return `500`.

The non-streaming endpoint responds with JSON:

```json
{
  "role": "assistant",
  "content": "A generated response."
}
```

The streaming endpoint responds with `text/event-stream`. It sends token events
such as `data: {"token": "Hello"}`, followed by `data: {"done": true}` when
generation completes. Generation errors are sent as events with an `error`
field.

## Docker

Build and run the image from the project root:

```bash
docker build -t casual-llm .
docker run --rm -p 8000:8000 casual-llm
```

Open <http://localhost:8000>. The Docker build downloads the model into the
image, which can make the image large. The container runs the API on
`0.0.0.0:8000`.

## Tests

`test_app.py` is an integration test that loads the model and checks the web UI,
health and model-info endpoints, and both chat endpoints. Run it with:

```bash
python test_app.py
```

The test needs the model available locally or an internet connection to
download it. It starts a temporary server on `127.0.0.1:8899`.

## Project layout

```text
casual_llm/
├── main.py              # FastAPI app, model loading, and API endpoints
├── run.py               # Server launcher and browser opener
├── chatbot_llm.py       # Standalone terminal chatbot
├── test_app.py          # API integration test
├── start_web.bat        # Windows Command Prompt launcher
├── start_web.ps1        # Windows PowerShell launcher
├── requirements.txt     # Python dependencies
├── Dockerfile           # Docker image definition
└── static/
    ├── index.html       # Production UI entry point
    ├── dev.html         # Vite development UI entry point
    ├── style.css        # UI styles
    ├── package.json     # Frontend dependencies and scripts
    ├── vite.config.js   # Vite configuration
    ├── dist/bundle.js   # Built production frontend
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── components/
        ├── hooks/
        ├── utils/
        └── constants/
```

## Notes

- Inference runs locally on the CPU; chat requests are not sent to a hosted
  inference API.
- Clearing the browser's `localStorage` removes saved conversations and
  preferences.
- The API has no authentication. Keep it bound to localhost unless you add
  appropriate access controls before exposing it to a network.
- Review the model's
  [Hugging Face page](https://huggingface.co/HuggingFaceTB/SmolLM2-360M-Instruct)
  for its license and usage terms.

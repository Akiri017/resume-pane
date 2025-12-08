# ResumePane

A transparent, open-source resume scanner for the tech industry.  
ResumePane replaces “black box” ATS scoring with a **glass-box, two-layer analysis pipeline**:

1. **Gatekeeper** — deterministic parsing that shows *exactly* what machines read.  
2. **Gap Analyst** — an AI-powered comparison engine that evaluates your resume against multiple job descriptions.

Built with **Next.js 15**, **TypeScript**, and a flexible LLM interface supporting both **open-source models (Llama/Mistral)** and optional paid models (**OpenAI / Claude**).

---

## ✨ Features

- **Gatekeeper Parsing Layer**: Deterministic PDF parsing with machine-readable verification and a complete “Raw Text View.”
- **Batch Job Analysis**: Compare one resume against **3–5 job descriptions** simultaneously.
- **Gap Matrix**: JSON-based diff of missing technical skills across all JDs, rendered as a visual table.
- **Dual Scoring Model**:  
  - **Format Score (0–50)** — structure, readability, section detection  
  - **Content Score (0–50)** — keyword presence vs. JDs  
- **Glass-Box Output**: Transparent, deterministic, and reproducible rules. No opaque ATS scoring.
- **Local LLM Support (Default)**: Use free models like **Llama 3**, **Mistral**, or **CodeLlama** via Ollama. OpenAI/Claude are optional upgrades.

---

## 🧠 Architecture

### 1. Gatekeeper (Deterministic Parser)
- Uses `pdf-parse`  
- No AI correction  
- Flags unreadable files (>20% noise, corrupted text, or empty output)  
- Returns clean machine text + readability status  

### 2. Gap Analyst (LLM Layer)
- Compares resume text vs. up to 5 JDs  
- Normalizes technical skills (e.g., “AWS” = “Amazon Web Services”)  
- Identifies missing hard skills appearing in ≥50% of JDs  
- Outputs strict JSON for UI rendering  
- Can run on:
  - **Local open-source LLMs** (recommended for development & OSS contributors)  
  - **OpenAI/Claude** (optional for production)

---

## 📡 API Endpoints

### **POST `/api/v1/scan/validate`**  
Deterministic parsing & readability check.

**Input:** `multipart/form-data` (PDF)  
**Output:**
```json
{
  "status": "success",
  "text_content": "John Doe, Software Engineer...",
  "word_count": 450,
  "is_readable": true
}
```

### **POST `/api/v1/scan/analyze`**  
Analyze resume text against job descriptions.

**Input:**
```json
{
  "resume_text": "John Doe...",
  "job_descriptions": ["JD 1 text...", "JD 2 text..."]
}
```

**Output:**
```json
{
  "overall_match_score": 75,
  "gap_matrix": [
    {
      "skill": "Docker",
      "missing_in_jobs": [1, 3],
      "frequency": "High"
    }
  ]
}
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Dev Server
```bash
npm run dev
```

### 3. Configure Environment Variables
Create a `.env.local` file:
```env
# Optional for paid LLMs
OPENAI_API_KEY=your_key_here
ANTHROPIC_API_KEY=your_key_here

# Default: use a local LLM (Ollama)
AI_PROVIDER=local
```

Run a local model (recommended for development):
```bash
ollama pull llama3
ollama run llama3
```

---

## 📂 Project Structure

```
src/
  app/
    api/
      v1/
        scan/
          validate/
          analyze/
  components/
  lib/
    parsing/
    prompts/
    scoring/
    llm/           # local + remote LLM clients
docs/
tests/
```

---

## 🤝 Contributing

Contributions are welcome!  
1. Fork the repository  
2. Create a feature branch  
3. Add tests when applicable  
4. Submit a clear, focused PR  

---

## 📄 License

MIT License — fully open for personal, commercial, and academic use.

---

## ⭐ Acknowledgements

Inspired by the growing need for transparent, open-source, and developer-focused ATS tools for software engineers and technical applicants.



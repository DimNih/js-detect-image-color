# js-image-color

## Deksripsi
Proyek ini adalah sebuah library JavaScript untuk mengambil warna dominan dari sebuah gambar.


## Tampilan
![Contoh Gambar](test.png)

## Importan!!
isi ke file css

```bash
:root {
    --primary: #6366f1;
    --secondary: #4f46e5;
    --accent: #ec4899;
    --background: #f8fafc;
    --text: #1e293b;
    --glass: rgba(255, 255, 255, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', system-ui, sans-serif;
}

body {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.container {
    background: rgba(255, 255, 255, 0.95);
    width: 100%;
    max-width: 800px;
    border-radius: 1.5rem;
    padding: 2rem;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h1 {
    font-size: 2.5rem;
    color: var(--text);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.upload-section {
    margin-bottom: 2rem;
}

#image-upload {
    display: none;
}

.upload-label {
    background: var(--primary);
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.upload-label:hover {
    background: var(--secondary);
    transform: translateY(-2px);
}

#image-container {
    margin: 2rem auto;
    max-width: 100%;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    position: relative;
}

#uploaded-image {
    max-width: 100%;
    height: auto;
    display: block;
    cursor: crosshair;
    transition: transform 0.2s ease;
}

#uploaded-image:hover {
    transform: scale(1.02);
}

#color-info {
    background: rgba(255, 255, 255, 0.9);
    padding: 1.5rem;
    border-radius: 1rem;
    margin-top: 2rem;
    display: none;
    animation: fadeIn 0.3s ease;
}

.color-display {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.color-box {
    width: 60px;
    height: 60px;
    border-radius: 0.75rem;
    border: 2px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.color-text {
    font-size: 1.2rem;
    color: var(--text);
    font-weight: 500;
}

.copy-button {
    background: var(--accent);
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.75rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.copy-button:hover {
    background: #db2777;
    transform: translateY(-1px);
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
    h1 {
        font-size: 2rem;
    }

    .container {
        padding: 1.5rem;
    }

    .upload-label {
        width: 100%;
        justify-content: center;
    }

    .color-display {
        flex-direction: column;
        gap: 0.5rem;
    }
}
```

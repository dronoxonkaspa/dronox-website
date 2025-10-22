import os
import shutil
import subprocess

# === PATH SETUP ===
project_root = r"C:\Users\israe\dronox-website"
downloads = os.path.expanduser(r"~\Downloads")

# Create images and videos folders
images_dir = os.path.join(project_root, "public", "images")
videos_dir = os.path.join(project_root, "public", "videos")
os.makedirs(images_dir, exist_ok=True)
os.makedirs(videos_dir, exist_ok=True)

# Files to copy and rename
files_to_copy = {
    os.path.join(downloads, "dronox-hero.png.png"): os.path.join(images_dir, "dronox-hero.png"),
    os.path.join(downloads, "dronox-bg.png.png"): os.path.join(images_dir, "dronox-bg.png"),
    os.path.join(downloads, "Drono-dj.mp4.mp4"): os.path.join(videos_dir, "Drono-dj.mp4"),
}

# === COPY FILES ===
for src, dest in files_to_copy.items():
    if os.path.exists(src):
        shutil.copy2(src, dest)
        print(f"✅ Copied: {os.path.basename(src)} → {dest}")
    else:
        print(f"⚠️ Missing file: {src}")

# === START LOCAL DEV SERVER ===
try:
    print("\n🚀 Starting Vite Dev Server...")
    subprocess.run(["npm", "run", "dev"], cwd=project_root)
except FileNotFoundError:
    print("⚠️ npm not found — please install Node.js or run manually.")

#!/bin/bash

delete_all_on_dir() {
  	cd "$1" && rm -rf .* && rm -rf *
	echo "Deleted all on: $1"
}

current_user=$(whoami)
user_temp_path="/c/Users/$current_user/AppData/Local/Temp"
cache_dirs=("/c/Windows/Temp" "$user_temp_path" "/c/Windows/Prefetch")

for cache_dir in "${cache_dirs[@]}"; do
  	delete_all_on_dir "$cache_dir"
done

echo "Deleted all Files"

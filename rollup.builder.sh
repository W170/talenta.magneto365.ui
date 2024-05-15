#!/bin/bash

# Def constants
SOURCE_MODULES=(
  "src/components/UI/atoms"
  "src/components/UI/molecules"
  "src/components/UI/organism"
  "src/components/UI/template"
  "src/components/UI/page"
  "src/components/hooks"
)

function list_directories() {
  local path="$1"
  local directories=()

  for item in "$path"/*; do
    if [ -d "$item" ]; then
      directories+=("$item")
    fi
  done

  echo "${directories[@]}"
}

function get_common_directory() {
  local path="$1"
  local common_directory

  common_directory=$(basename "$(dirname "$path")")

  echo "$common_directory"
}

function get_last_directory() {
  local path="$1"
  local last_directory

  last_directory=$(basename "$path")

  echo "$last_directory"
}

function remove_first_directory() {
  local path="$1"
  local modified_path

  modified_path=$(echo "$path" | sed 's/^[^/]*\/\(.*\)/\1/')

  echo "$modified_path"
}

function dispatch_build () {
  echo "====================== BUILDING: Full ======================"
  yarn build

  for module in "${SOURCE_MODULES[@]}"; do
    module_name=$(get_last_directory "$module")
    directories_array=($(list_directories "$module"))
    echo "====================== BUILDING: $module_name ======================"
    for feature_dir in "${directories_array[@]}"; do
      feature=$(get_last_directory $feature_dir)
      relative_path=$(remove_first_directory $feature_dir)
      echo "++++++++++++++++++++ BUILDING: $module_name:$feature ++++++++++++++++++++"
      yarn build --environment "$module_name:$feature:$relative_path"
    done
  done
}

dispatch_build
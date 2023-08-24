interface Props {
  className?: string;
  color?: string;
}
export default function DogIcon({ className = "", color = "#000" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="32"
      version="1"
      viewBox="0 0 1000 681"
      className={className}
    >
      <path
        d="M8100 6325c-81-18-135-38-225-83-163-81-299-191-595-478-113-110-233-220-265-245-61-47-576-345-720-417-178-89-314-133-460-151-236-28-814-56-1455-71-706-16-1079-73-1580-241-242-80-346-142-453-268-104-121-172-264-291-610-43-123-96-267-120-320-130-297-309-449-591-501-33-6-199-15-370-20-370-11-470-25-580-83l-40-22 135-6c74-4 203-14 285-23 573-61 785-32 1031 143 215 151 365 362 455 636 18 55 37 105 42 110 14 14 1-284-18-428-32-242-148-734-196-832-16-33-53-91-81-130-72-96-334-353-407-400-88-56-109-114-156-425-17-108-44-234-71-329-79-273-93-384-54-433 51-66 300-119 409-88 67 19 97 71 71 120-5 10-45 32-87 50-99 41-107 48-93 86 7 16 40 121 75 234s80 245 101 294c69 164 168 287 274 341 86 43 88 43 115-17 15-34 30-96 40-173 46-341 59-390 121-445 41-36 83-45 199-44 101 1 160 14 199 45 61 48 11 108-112 134-45 10-86 23-90 29-14 18-52 335-52 433 0 81 3 95 22 117 13 13 149 122 303 242 318 247 400 313 574 468 194 173 400 408 506 575l40 63 120-6c332-16 645-81 1311-271 164-47 371-103 459-125 157-38 418-90 455-90 36 0 89-208 146-580 19-124 48-297 65-385 23-118 33-207 38-340l8-180 42-100c28-65 53-148 71-238 35-170 49-195 120-224 124-49 306-68 375-39 85 36 65 114-45 179-109 66-127 83-151 144-21 52-23 78-26 263l-4 205 20-32c26-41 56-143 76-258 23-129 51-213 90-267 48-66 102-81 273-76 111 3 133 6 177 28 100 50 64 119-92 171-96 31-133 55-133 85 0 8-16 54-36 101-49 118-64 240-71 563-6 288 0 413 47 920l29 315 64 126c145 285 287 701 456 1339 39 146 82 289 97 318 37 73 96 122 238 193 66 34 143 77 169 96l48 34 52-29c204-115 518-174 712-133 95 20 196 73 247 130 55 61 114 171 129 240 17 79 4 100-89 144-152 71-235 165-366 414-49 93-108 196-132 229-94 133-242 237-404 284-98 29-323 37-420 15z"
        transform="matrix(.1 0 0 -.1 0 681)"
        fill={color}
      ></path>
    </svg>
  );
}
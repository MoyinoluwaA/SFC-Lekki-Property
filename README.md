# SFC Lekki Property API

## Introduction

[SFC Lekki Property API](https://documenter.getpostman.com/view/15779746/UVXhpbiF) is a HTTP REST API for a property company in which you can add properties for lease and also view properties available.

Check [Software Architecture Drawing](https://drive.google.com/file/d/1QytLFKYmczPkewieC1Qs3u6shM1MQpxb/view?usp=sharing)

## Overview

**What you can do with this API:**

- Add a property
- Get list of all properties
- Get list of individual property
- Get filtered list of properties
- Upload image of property

## Documentation
[API Specification Document](https://docs.google.com/document/d/1o2SQ9Ka763PBDB5R3xZe0q_N_EPE9-77E3drzqRrn1U/edit?usp=sharing)

[Read more in the documentation.](https://documenter.getpostman.com/view/15779746/UVXhpbiF)

## Set Up Development

- Check that the latest version on nodejs is installed:

```
  node --version
  >> v14.4.0 or greater
```

- Clone the repo and cd into it:

```bash
  git clone https://github.com/MoyinoluwaA/SFC-Lekki-Property
  cd SFC-Lekki-Property
```

- Install dependencies:

```bash
  npm install
```

- Create a `.env` file in the root folder and add all the configuration in the `.env.example` file to it. Make sure you replace the values with the right values:

```
  # General settings
    DATABASE_URL = <DATABASE_URL> Use a mongo database(atlas)
    CLOUDINARY_CLOUD_NAME = <CLOUDINARY_CLOUD_NAME>
    CLOUDINARY_API_KEY = <CLOUDINARY_API_KEY>
    CLOUDINARY_API_SECRET = <CLOUDINARY_API_SECRET>

```

- Run the application with the command:

```
  npm start
```

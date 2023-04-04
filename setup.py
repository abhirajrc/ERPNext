from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in agnikul/__init__.py
from agnikul import __version__ as version

setup(
	name="agnikul",
	version=version,
	description="ERP@agnikul",
	author="me1",
	author_email="abhiraajchandrasekaran@agnikul.in",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)

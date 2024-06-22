import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SemesterRegistrationServices } from './semesterRegistration.service';

const createSemesterRegistration = catchAsync(async (req, res) => {
  const result =
    await SemesterRegistrationServices.createSemesterRegistrationIntoDB(
      req.body,
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester registration is created successfully!',
    data: result,
  });
});

const getAllSemesterRegistrations = catchAsync(async (req, res) => {
  const result =
    await SemesterRegistrationServices.getAllSemesterRegistrationsFromDB(
      req.query,
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester registration are retrieved successfully!',
    data: result,
  });
});

const getOneSemesterRegistrations = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result =
    await SemesterRegistrationServices.getOneSemesterRegistrationFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester registration is retrieved successfully!',
    data: result,
  });
});

const updateSemesterRegistration = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result =
    await SemesterRegistrationServices.updateSemesterRegistrationIntoDB(
      id,
      req.body,
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester registration is updated successfully!',
    data: result,
  });
});

export const SemesterRegistrationController = {
  createSemesterRegistration,
  getAllSemesterRegistrations,
  getOneSemesterRegistrations,
  updateSemesterRegistration,
};
